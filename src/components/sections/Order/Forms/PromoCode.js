import AnimButton from "../../../ui/buttons/AnimButton/AnimButton";
import Input from "../../../ui/inputs/Input/Input";
import { userCartStore } from "../../../../stores/cartStore";
import FormWrapper from "../../../FormWrapper/FormWrapper";

export default function PromoCode() {
  const { totalPrice } = userCartStore();
 
  return (
    <div className="promo-code">
      <FormWrapper formkey={"codeForm"}>
        <div className="row gap-15">
          <Input
            type="text"
            placeholder="Подарочная карта или купон"
            name="code"
          />
          <AnimButton style={{ minWidth: "170px" }} type="submit">
            применить
          </AnimButton>
        </div>
        <div className="row s-between wrap gap-10 text-main text-black xsmall-text ">
          <span className="up-case">промежуточный</span>
          <span>{totalPrice()} руб</span>
        </div>
        <div className="row s-between gap-15 text-main text-black xsmall-text ">
          <span className="up-case">доставка</span>
          <span className="text-gray">Расситывается на следующем шаге</span>
        </div>
        <div className="row s-between wrap gap-15 text-main text-black small-text">
          <span className="up-case">итог</span>
          <span>{totalPrice()} руб</span>
        </div>
      </FormWrapper>
    </div>
  );
}
