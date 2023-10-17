import { IFoodDataProps } from 'api/data/FoodData'
import { IUser } from 'types/data'

export type UserState = {
  user: IUser | null
  loading: boolean
  token: string | null
  products: IFoodDataProps[]
}
