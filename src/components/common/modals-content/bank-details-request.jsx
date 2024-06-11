import React from "react";
import CustomFormLabel from "../form-label";
import FormTextarea from "../form-textarea";
import { Button } from "components/ui/button";

const BankDetailsRequest = ({ value, setValue, setOpen }) => {
  const handleRejectRequest = (e) => {

    setOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1">
        {/* <form> */}
          <CustomFormLabel htmlfor={"comment"} label={"Comment"} compulsory />
          <FormTextarea id={"comment"} placeholder={"Comment"} />
          <div className="mt-8 flex justify-end">
            <Button onClick={(e) => handleRejectRequest(e)} className="bg-primary hover:bg-secondary text-white">
              Submit
            </Button>
          </div>
        {/* </form> */}
      </div>
    </>
  );
};

export default BankDetailsRequest;
