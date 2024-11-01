<template>
  <v-container>
    <div class="pb-8">
      <h1>New Contract</h1>
    </div>
    <v-form ref="form" v-model="isFormValid">
      <v-row dense>
        <v-col cols="12" md="6">
          <v-text-field
            label="Name"
            v-model="contract.name"
            :rules="[rules.required]"
            outlined
            dense
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            label="Status"
            v-model="contract.status"
            :items="statusOptions"
            :rules="[rules.required]"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="6">
          <v-text-field
            label="Amount"
            v-model="contract.amount"
            type="number"
            prefix="$"
            :rules="[rules.required, rules.isNumber]"
            outlined
            dense
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-radio-group
            inline
            label="Currency"
            v-model="contract.currency"
            :rules="[rules.required]"
          >
            <v-radio label="BRL" value="BRL"></v-radio>
            <v-radio label="USD" value="USD"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-row dense>
        <v-col cols="12" md="6">
          <v-select
            label="Contractor"
            v-model="contract.contractorId"
            item-title="name"
            item-value="id"
            :items="customers"
            :rules="[rules.required]"
            outlined
            dense
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            label="Contracted"
            v-model="contract.contractedId"
            item-title="name"
            item-value="id"
            :items="customers"
            :rules="[rules.required]"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-textarea
        label="Description"
        v-model="contract.description"
        :rules="[rules.required]"
        outlined
        dense
      />

      <v-date-input
        v-model="contract.startDate"
        label="Start Date"
        :rules="[rules.required]"
      />

      <v-date-input
        v-model="contract.endDate"
        label="End Date"
        :rules="[rules.required]"
      />

      <v-date-input
        v-model="contract.reniewDate"
        label="Reniew Date"
        :rules="[rules.required]"
      />

      <div class="d-flex justify-space-between align-center">
        <v-btn href="/" variant="outlined" class="mt-4"> Cancel </v-btn>
        <v-btn
          :disabled="!isFormValid"
          @click="createContract"
          color="primary"
          class="mt-4"
        >
          Create
        </v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'nuxt/app';
import { CREATE_CONTRACT } from '~/graphql/contract';
import { GET_ALL_CUSTOMERS } from '~/graphql/customer';

const contract = ref({
  name: '',
  amount: null,
  currency: 'BRL',
  description: '',
  status: 'draft',
  endDate: null,
  startDate: null,
  reniewDate: null,
  contractorId: null,
  contractedId: null,
});

const isFormValid = ref(false);
const router = useRouter();

const statusOptions = [
  'draft',
  'signed',
  'canceled',
  'not_signed',
  'terminated',
];

const rules = {
  required: (v) => !!v || 'This field is required',
  isNumber: (v) => !isNaN(v) || 'This field must be a number',
};

const customers = ref([]);
const { data } = await useAsyncQuery(GET_ALL_CUSTOMERS);
customers.value = data.value.getAllCustomers;

const { mutate: addContract } = useMutation(CREATE_CONTRACT);
const createContract = async () => {
  try {
    const { data } = await addContract({
      name: contract.value.name,
      amount: Number(contract.value.amount),
      currency: contract.value.currency,
      description: contract.value.description,
      status: contract.value.status,
      endDate: contract.value.endDate,
      startDate: contract.value.startDate,
      reniewDate: contract.value.reniewDate,
      contractorId: contract.value.contractorId,
      contractedId: contract.value.contractedId,
    });

    if (data) router.push('/');
  } catch (error) {
    console.error('Error to create contract:', error);
  }
};
</script>
