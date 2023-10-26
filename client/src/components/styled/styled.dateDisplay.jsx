import styled from "styled-components";

export const DateDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.25rem;

    & > img {
        width: 128px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
            margin-bottom: 0.5rem;
        }
    }
    @media (min-width: 320px) {
        flex-direction: column;
        & > img {
            width: 128px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > p {
                margin-bottom: 0.5rem;
            }
        }
    }
    @media (min-width: 375px) {
        flex-direction: column;
        & > img {
            width: 128px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > p {
                margin-bottom: 0.5rem;
            }
        }
    }
    @media (min-width: 425px) {
        flex-direction: column;
        & > img {
            width: 128px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > p {
                margin-bottom: 0.5rem;
            }
        }
    }
    @media (min-width: 768px) {
        flex-direction: column;
        & > img {
            width: 128px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > p {
                margin-bottom: 0.5rem;
            }
        }
    }

    @media (min-width: 1024px) {
        flex-direction: column;
        & > img {
            width: 128px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            & > p {
                margin-bottom: 0.5rem;
            }
        }
    }
}`;
