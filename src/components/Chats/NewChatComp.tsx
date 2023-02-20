import { MDBCard, MDBCardFooter, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useGlobalContext } from "../contexts";
import { iconMediumSize } from "../styles/styles";

export const NewChatComp = (props: any) => {
    console.log(props);
    
    const {userName } = useGlobalContext();
    const [value, setValue] = useState("");

    return (
        <div>
            <MDBContainer className="container-dialog">
                <MDBRow className="container-row">
                    <MDBCol className="container-col">
                    
                        <MDBCard className="container-card"> 
                            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3 container-footer">

                            <input
                                type="text"
                                className="form-control form-control-lg"
                                value = {value}
                                id="exampleFormControlInput1"
                                placeholder="Type message"
                            />
                            <a className="ms-3" href="#!" >
                                <RiSendPlaneFill size= {iconMediumSize} className = "iconColor"/>
                            </a>
                            </MDBCardFooter>
                        </MDBCard>
                        
                    </MDBCol>
                </MDBRow>
            </MDBContainer> 
            {userName}
        </div>
    )
}

export default NewChatComp;