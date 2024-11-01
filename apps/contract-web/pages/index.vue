<template>
  <v-container>
    <div class="d-flex justify-space-between align-center pb-8">
      <h1>List of Contracts</h1>
      <v-btn @click="newContract" variant="elevated">New Contract</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Identifier</th>
          <th class="text-left">Name</th>
          <th class="text-left">Amount</th>
          <th class="text-left">Description</th>
          <th class="text-left">Status</th>
          <th class="text-left">CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contract in contracts" :key="contract.id">
          <td>{{ contract.identifier }}</td>
          <td>{{ contract.name }}</td>
          <td>{{ currencies[contract.currency]}} {{ contract.amount }}</td>
          <td>{{ contract.description }}</td>
          <td>{{ contract.status }}</td>
          <td>{{ new Date(contract.createdAt).toLocaleDateString() }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { GET_ALL_CONTRACTS } from '~/graphql/contract';

const currencies: any = {
  USD: '$',
  BRL: 'R$',
}

const contracts: any = ref([]);

const { data: { value } } = await useAsyncQuery<any>(GET_ALL_CONTRACTS);
contracts.value = value.getAllContracts;

const newContract = () => {
  useRouter().push('/new');
};
</script>
