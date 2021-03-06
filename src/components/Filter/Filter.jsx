import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from "./Filter.styled";
import { filterContacts } from "../../redux/contacts/contacts-actions";

export function Filter() {
    const value = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    return (
        <Label>Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={(e) => dispatch(filterContacts(e.currentTarget.value))}
                placeholder="Enter contact name"/>
        </Label>
    )
}