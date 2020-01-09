import React, { useEffect } from "react";
import * as SS from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import OutlinedStarIcon from "@material-ui/icons/StarBorderOutlined";
import styled from "styled-components";
import { selectUserStarredProject, selectActiveProjectUid } from "./selectors";
import { getLoggedInUserStars, toggleStarProject } from "../Profile/actions";

const StyledIconButton = styled(IconButton)`
    && {
        padding: 2px;
    }
`;
const StyledStarIcon = styled(StarIcon)`
    && {
        fill: #8f9089;
    }
`;

const StyledOutlinedStarIcon = styled(OutlinedStarIcon)`
    && {
        fill: #8f9089;
    }
`;

const StyledLabelContainer = styled.div`
    padding: 2px;
    font-size: 15px;
    font-weight: 500;
    color: ${props => props.theme.color.primary};
    letter-spacing: 1.25px;
`;
const SocialControls = () => {
    const starred = useSelector(selectUserStarredProject);
    const projectUid = useSelector(selectActiveProjectUid);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedInUserStars());
    }, [dispatch]);
    return (
        <div css={SS.starButtonContainer}>
            <StyledIconButton
                size="medium"
                onClick={() => {
                    if (projectUid !== null) {
                        dispatch(toggleStarProject(projectUid));
                    }
                }}
            >
                {starred && <StyledStarIcon fontSize="large" />}
                {!starred && <StyledOutlinedStarIcon fontSize="large" />}
                <StyledLabelContainer>
                    {starred && "un"}star
                </StyledLabelContainer>
            </StyledIconButton>
        </div>
    );
};

export default SocialControls;
