import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface AuthStateModel {
  token: string;
  id: number;
  username: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: '',
    id: 0,
    username: '',
  },
})
export class AuthState {
  @Action({ type: 'SetAuthData' })
  setAuthData(
    ctx: StateContext<AuthStateModel>,
    { token, id, username }: AuthStateModel
  ) {
    ctx.patchState({ token, id, username });
  }

  @Action({ type: 'ClearAuthData' })
  clearAuthData(ctx: StateContext<AuthStateModel>) {
    ctx.setState({ token: '', id: 0, username: '' });
  }

  @Selector()
  static getUsername(state: AuthStateModel) {
    return state.username;
  }

  @Selector()
  static getToken(state: AuthStateModel) {
    return state.token;
  }
  @Selector()
  static getId(state: AuthStateModel) {
    return state.id;
  }
}
export class ClearAuthData {
  static readonly type = 'ClearAuthData';
}
