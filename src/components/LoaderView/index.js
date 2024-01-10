import Loader from 'react-loader-spinner'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <LoaderContainer data-testid="loader">
    <Loader height={50} width={50} color="#4f46e5" type="ThreeDots" />
  </LoaderContainer>
)

export default LoaderView
