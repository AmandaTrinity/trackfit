import { Location } from "./location.interface"

export interface UnitResponse {
    current_contry_id: number;
    locations: Location[]
}