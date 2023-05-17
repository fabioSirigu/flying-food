import { apiClient, currencyApiClient } from './client'
import {
  CurrencyRatesDto,
  OrderDto,
  OrderItem,
  ProductDto,
  ReviewDto,
  TagDto
} from './types'

export const getProducts = () => apiClient.get<ProductDto[]>('products')

export const getProductsRandom = () => apiClient.get<ProductDto[]>('products/random')

export const getTags = () => apiClient.get<TagDto[]>('tags')

export const getProductById = (id: string) => apiClient.get<ProductDto>(`products/${id}`)

export const getReviewsByProductId = (id: string) =>
  apiClient.get<ReviewDto[]>(`reviews/${id}`)

export const getUSDRates = () => currencyApiClient.get<CurrencyRatesDto>('USD')

export const getAllOrders = () => apiClient.get<OrderDto[]>('orders')

export const addReviewOnProduct = (data: ReviewDto) =>
  apiClient.post<{ message: string }>('reviews', data)

export const addOrder = (data: OrderDto) =>
  apiClient.post<{ message: string }>('order', data)
