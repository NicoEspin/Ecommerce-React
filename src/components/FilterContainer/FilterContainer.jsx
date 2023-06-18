import { Filters } from "../Filters/Filters"
export function FilterContainer ({changeFilters}){
    return (
    <section>
        <Filters onChange={changeFilters}/>
    </section>
    )
}