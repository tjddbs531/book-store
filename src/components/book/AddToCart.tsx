import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import InputText from "../common/inputText";
import Button from "../common/Button";

interface Props {
    book : BookDetail;
}

function AddToCart({book} : Props){
    return (
        <AddToCartStyle>
            <div>
            <InputText inputType="number" />
            <Button size ="medium" scheme="normal">
                +
            </Button>
            <Button size ="medium" scheme="normal">
                -
            </Button>
            </div>
            <Button size ="medium" scheme="primary">
                장바구니 담기
            </Button>
        </AddToCartStyle>
    )
}

const AddToCartStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export default AddToCart