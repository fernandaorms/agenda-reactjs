import React from 'react';
import { Overlay, PopUp, Buttons } from './styled';

import { PrimaryButton, DangerButtonLight } from '../../styles/buttons';

const ConfirmationPopUp = ({onConfirm, onCancel, actionName}) => {
    return (
        <Overlay>
            <PopUp>
                <div>
                    <span>Are you sure you wanna <strong>{actionName}</strong>?</span>

                    <Buttons>
                        <DangerButtonLight onClick={onConfirm}>Confirm</DangerButtonLight>
                        <PrimaryButton onClick={onCancel}>Cancel</PrimaryButton>
                    </Buttons>
                </div>
            </PopUp>
        </Overlay>
    )
}

export default ConfirmationPopUp;