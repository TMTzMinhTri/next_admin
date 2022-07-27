export default {
  root: () => '/',
  admin: {
    root: () => '/admin',
    signIn: () => '/admin/sign-in',
    signUp: () => '/admin/sign-up',
    signOut: () => '/admin/sign-out',
    server: () => '/admin/server',
    accountSettings: {
      profile: () => '/admin/account-settings/profile',
      password: () => '/admin/account-settings/password',
    },
  },
}
