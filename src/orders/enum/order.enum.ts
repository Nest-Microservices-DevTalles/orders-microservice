import { OrderStatus } from '@prisma/client';


export const OrderStatusList = [
  OrderStatus.PENDING,
  OrderStatus.DELIVERED,
  OrderStatus.CANCELLED,
]
