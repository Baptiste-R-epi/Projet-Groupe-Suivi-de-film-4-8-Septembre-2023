import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 1.45rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl};

  @media (min-width: 320px) {
    font-size: 1.5rem;
  }

  @media (min-width: 375px) {
    font-size: 1.5rem;
  }

  @media (min-width: 425px) {
    font-size: 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl};
  @media (min-width: 320px) {
    font-size: 1.2rem;
  }
  @media (min-width: 375px) {
    font-size: 1.2rem;
  }
  @media (min-width: 425px) {
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl};
  @media (min-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 375px) {
    font-size: 1rem;
  }
  @media (min-width: 425px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const H4 = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl};
  @media (min-width: 320px) {
    font-size: 0.8rem;
  }
  @media (min-width: 375px) {
    font-size: 0.8rem;
  }

  @media (min-width: 425px) {
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const H5 = styled.h5`
  font-size: 0.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: ${(props) => props.align};
  padding-left: ${(props) => props.pl};
  @media (min-width: 320px) {
    font-size: 0.6rem;
  }

  @media (min-width: 375px) {
    font-size: 0.6rem;
  }

  @media (min-width: 425px) {
    font-size: 0.6rem;
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.8rem;
  }
`;
