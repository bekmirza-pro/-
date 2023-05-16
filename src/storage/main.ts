import { SampleStorage } from './mongo/sample'
import { AdminStorage } from './mongo/admin'
import { UserStorage } from './mongo/user'
import { CategoryStorage } from './mongo/category'
import { OrderStorage } from './mongo/order'

interface IStorage {
    sample: SampleStorage
    admin: AdminStorage
    user: UserStorage
    category: CategoryStorage
    order: OrderStorage
}

export let storage: IStorage = {
    sample: new SampleStorage(),
    admin: new AdminStorage(),
    user: new UserStorage(),
    category: new CategoryStorage(),
    order: new OrderStorage()
}
