import AccountSettingsWrapper from '@/containers/AccountSettingsWrapper'
import AdminLayout from '@/layout/AdminLayout'

const AccountSettingsPage = () => {
  return <div>Đây là trang account profile</div>
}
AccountSettingsPage.getLayout = (page: React.ReactNode) => (
  <AdminLayout>
    <AccountSettingsWrapper>{page}</AccountSettingsWrapper>
  </AdminLayout>
)
export default AccountSettingsPage