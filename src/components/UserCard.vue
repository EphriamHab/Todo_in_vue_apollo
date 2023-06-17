<script setup>
import { defineProps} from "vue";
import { RouterLink } from "vue-router";
import { useQuery,useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

// import { GET_USERS_QUERY } from "../components/graphql/graphql-queries.js"
import DeleteUser from "../components/mutation/DeleteUser.vue"

const { user } = defineProps(["user"]);

</script>

<template>
  <div class="user-card">
    <img src="../assets/user.png" alt="user_img" />
    <!-- <img  @click="deleteUser" class="delete" src="../assets/delete.png" alt="delete_user_img" /> -->
    <DeleteUser   :userID="user.id"></DeleteUser>
    <div>
      <h2 class="text-lg font-semibold">{{ user.name }}</h2>
      <RouterLink :to="`/users/${user.id}`">
        <button class="bg-blue-800 text-fuchsia-50" @click="hello">Show Task </button>
      </RouterLink>     
    </div>
    <!-- <div class="delete-user" v-if="deleteLoading">Deleting user...</div> -->

  </div>
</template>

<style scoped>

.user-card {
  /* width: 150px; */
  /* height: 150px; */
  background: conic-gradient(from -.5turn at bottom right, rgb(174, 187, 218), rgb(139, 209, 209), rgb(124, 93, 155));
  padding: 10px;
  margin: 10px;
  margin-right: 20px; 
  margin-left: 20px;
  position: relative;
  @apply  w-52 h-40 flex flex-col justify-between rounded-md
}

.user-card  img{
    /* width: 56px; */
    /* margin: auto; */
    @apply mx-auto w-14
    
}

/* .user-card  .delete {
  width: 18px;
 position: absolute;
 right: 8px;
 cursor: pointer;
} */

.user-card h2 {
    text-transform: uppercase;
    text-align: center;
    padding: 5px
    
}

.user-card button {
    padding: 2px 5px;
    display: block;
    margin: auto;
    margin-top: 8px;
    border: 1px solid white;
    border-radius: 5px;
   
}

.delete-user{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
