import {createContext} from 'react';
import type {RemoteRoot} from '@remote-ui/core';

import type reconciler from './reconciler';

export interface RenderContextDescriptor {
  root: RemoteRoot;
  reconciler: typeof reconciler;
}

export const RenderContext = createContext<RenderContextDescriptor | null>(
  null,
);
