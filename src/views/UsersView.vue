<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <table>
          <thead>
            <tr>
              <th @click="sort('name')">Name &#8595;</th>
              <th @click="sort('birthdate')">Age &#8595;</th>
              <th @click="sort('gender')">Gender &#8595;</th>
              <th @click="sort('reviews')">Reviews &#8595;</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="user in usersSort" :key="user.id">
              <td>
                <User :user="user" />
              </td>
              <td>{{ user.birthdate }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.reviews.length }}</td>
            </tr>
          </tbody>
        </table>

        <p style="text-align: center">
          <span>
            debug: sort: {{ currentSort }}, dir: {{ currentSortDir }}
          </span>
          <span>
            page: {{ this.page.current }}, length: {{ this.page.length }}
          </span>
        </p>
      </div>
    </section>

    <!-- buttons -->
    <section>
      <div class="contaier">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage">&#8592;</div>
          <div class="btn btnPrimary" @click="nextPage">&#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

import User from "@/components/User.vue";

export default {
  components: { User },
  data() {
    return {
      users: [],
      reviews: [],
      currentSort: "name",
      currentSortDir: "asc",
      page: {
        current: 1,
        length: 4,
      },
    };
  },
  created() {
    this.$store.dispatch("getUsers").then((users) => {
      this.users = users;
    });
    this.$store.dispatch("getReviews").then((reviews) => {
      this.reviews = reviews;
      this.reviews.forEach((review) => {
        let user = this.users.find((user) => user.id === review.user_id);
        user.reviews.push(review);
        console.log(review);
      });
    });
  },
  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let first = this.get(a[this.currentSort]);
          let second = this.get(b[this.currentSort]);
          let mod = 1;
          if (this.currentSortDir === "desc") mod = -1;

          if (first < second) return -1 * mod;
          if (first > second) return 1 * mod;
          return 0;
        })
        .filter((row, index) => {
          let start = (this.page.current - 1) * this.page.length;
          let end = this.page.current * this.page.length;
          if (index >= start && index < end) return true;
        });
    },
  },
  methods: {
    get(str) {
      let date = "";
      if (this.currentSort === "birthdate") {
        let arrayDate = str.split(".");
        date = new Date(arrayDate[2], arrayDate[1], arrayDate[0]);
        date = date.toISOString();
        return date;
      }
      return str;
    },
    sort(e) {
      if (e === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = e;
    },
    // Pagination
    prevPage() {
      if (this.page.current > 1) this.page.current -= 1;
    },
    nextPage() {
      if (this.page.current * this.page.length < this.users.length)
        this.page.current += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  line-height: 1.5em;
  border-collapse: separate;
  border-spacing: 0 34px;
  thead {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    & th {
      padding: 20px 22px;
      white-space: nowrap;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
  td {
    padding: 20px;
  }
  tbody tr {
    font-weight: 600;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }
}
.button-list {
  width: 100%;
  text-align: center;

  .btn {
    border-radius: 60px;
    margin: 0 20px;
  }
}
</style>
