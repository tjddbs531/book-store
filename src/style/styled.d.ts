// src/style/styled.d.ts

import 'styled-components';
import { Theme } from './theme'; // theme.ts 경로에 따라 수정

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
