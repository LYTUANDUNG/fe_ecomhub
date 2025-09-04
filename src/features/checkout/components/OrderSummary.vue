<script setup>
import { computed } from 'vue';
import OrderRow from './OrderRow.vue';
import OrderTotal from './OrderTotal.vue';
import Button from "@/components/ui/button/Button.vue";
import CardDescription from "@/components/ui/card/CardDescription.vue";



const props = defineProps({
  subtotal: { type: Number, required: true },
  shipping: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  taxRate: { type: Number, default: 0.1 },
  currency: { type: String, default: 'VND' },
  loading: { type: Boolean, default: false },
  buttonText: { type: String, default: 'Place Order' },
});

const format = (n) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: props.currency }).format(n);

const taxableAmount = computed(() => Math.max(props.subtotal - props.discount, 0));
const tax = computed(() => Math.round(taxableAmount.value * props.taxRate));
const total = computed(() => Math.max(taxableAmount.value + props.shipping + tax.value, 0));

const rows = computed(() => [
  { label: 'Tạm tính', value: format(props.subtotal) },
  { label: 'Giảm giá', value: '-' + format(props.discount) },
  { label: 'Phí vận chuyển', value: format(props.shipping) },
  { label: `Thuế (${Math.round(props.taxRate * 100)}%)`, value: format(tax.value) },
]);

const emit = defineEmits(['submit']);
const onSubmit = () => { if (!props.loading) emit('submit'); };
</script>

<template>
  <aside class="sticky top-4 grid gap-3 p-4 border border-gray-200 rounded-2xl bg-white shadow-md min-w-[320px]">
    <h3 class="text-lg font-bold">Order Summary</h3>

    <OrderRow v-for="row in rows" :key="row.label" :label="row.label" :value="row.value" />

    <hr class="border-t border-dashed border-gray-200 my-1" />

    <OrderTotal :total="total" :format="format" />

    <Button variant="default" size="sm">
      Thanh toán
    </Button>

    <CardDescription>  Giá đã bao gồm thuế. Bạn có thể nhập mã giảm giá ở bước trước.</CardDescription>
  </aside>
</template>
