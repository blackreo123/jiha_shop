import styled from "styled-components";

const OpenBtn = styled.button`
    
    margin-left: ${props => props.sideNavMarginLeft};
`

const MySidebar = styled.div`
    width: ${props => props.sideNavWidth};
`

export { OpenBtn, MySidebar }