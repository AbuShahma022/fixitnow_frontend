## Authentication & User

| Frontend Component/Page | React Hook | Backend Endpoint | Method |
|--------------------------|------------|------------------|--------|
|app\(auth)\login\_components\LoginForm.tsx| `useLogin` | `POST /api/auth/login` | POST |
|shared\navbar\AuthButtons.tsx| `useLogout` | `POST /api/auth/logout` | POST |
|app\(auth)\login\_components\RegisterForm.tsx| `useRegister` | `POST /api/user/register` | POST |
|app\(DashboardGroup)\_components\Profile.tsx| `useProfile` | `GET /api/user/me` | GET |
|                          | `useUser` | `GET /api/user/:id` | GET |
|app\(DashboardGroup)\_components\EditProfileDialog.tsx| `useUpdateProfile` | `PATCH /api/user/me` | PATCH |
| Axios Interceptor | — | `POST /api/auth/refresh-token` | POST |


## Public

| Frontend Component/Page | React Hook | Backend Endpoint | Method |
|--------------------------|------------|------------------|--------|
| `app/(public)/categories/page.tsx` | `useCategories` | `GET /api/category/get-all-categories` | GET |
| `app/(public)/categories/[id]/CategoryDetails.tsx` | `useCategory` | `GET /api/category/get-category/:id` | GET |
| `app/(public)/_components/home/PopularServices.tsx` | `useMasterServices` | `GET /api/master-service/get-all-services` | GET |
| `app/(public)/services/[id]/page.tsx` | `useMasterService` | `GET /api/master-service/:id` | GET |
| `app/(public)/technicians/page.tsx` | `useTechnicians` | `GET /api/technician-profile/get-all-technicians` | GET |
| `app/(public)/_components/home/BecomeTechnicianDialog.tsx` | `useCreateTechnicianProfile` | `POST /api/technician-profile/create-technician-profile` | POST |

## Customer

| Frontend Component/Page | React Hook | Backend Endpoint | Method |
|--------------------------|------------|------------------|--------|
| `components/booking/BookingDialog.tsx` | `useCreateBooking` | `POST /api/booking/create-booking` | POST |
| `app/(DashboardGroup)/dashboard/page.tsx` | `useMyBookings` | `GET /api/booking/get-my-bookings` | GET |
| `components/booking/BookingDetails.tsx` | `useBooking` | `GET /api/booking/get-my-booking-details/:id` | GET |
| `components/booking/BookingActions.tsx` | `useCancelBooking` | `PATCH /api/booking/cancel-my-booking/:id` | PATCH |
| `components/booking/BookingActions.tsx` | `useCreateCheckoutSession` | `POST /api/payment/create-checkout-session` | POST |
| `components/booking/BookingActions.tsx` | `useCreateCheckoutSession` | `GET /api/payment/verify-session?session_id={sessionId}` | GET |
| `app/(DashboardGroup)/dashboard/payment-history/page.tsx` | `useMyPayments` | `GET /api/payment/get-my-payments` | GET |
| `components/booking/ReviewDialog.tsx` | `useCreateReview` | `POST /api/reviews/create-review` | POST |


## Technician

| Frontend Component/Page | React Hook | Backend Endpoint | Method |
|--------------------------|------------|------------------|--------|
| `app/(public)/_components/home/BecomeTechnicianDialog.tsx` | `useCreateTechnicianProfile` | `POST /api/technician-profile/create-technician-profile` | POST |
| `app/(DashboardGroup)/_components/EditTechnicianProfileDialog.tsx` | `useUpdateTechnicianProfile` | `PATCH /api/technician-profile/update-my-technician-profile` | PATCH |
| `app/(DashboardGroup)/dashboard/technician/services/page.tsx` | `useMyTechnicianServices` | `GET /api/technician-service/get-my-services` | GET |
| `app/(DashboardGroup)/_components/technician/CreateTechnicianServiceDialog.tsx` | `useCreateTechnicianService` | `POST /api/technician-service/create-technician-service` | POST |
| `app/(DashboardGroup)/_components/technician/EditTechnicianServiceDialog.tsx` | `useUpdateTechnicianService` | `PATCH /api/technician-service/update-my-service/:id` | PATCH |
| `app/(DashboardGroup)/_components/technician/DeleteTechnicianServiceDialog.tsx` | `useDeleteTechnicianService` | `DELETE /api/technician-service/delete-my-service/:id` | DELETE |
| `app/(DashboardGroup)/_components/technician/CreateServiceRequestDialog.tsx` | `useCreateServiceRequest` | `POST /api/service-request/create-service-request` | POST |
| `app/(DashboardGroup)/dashboard/technician/service-requests/page.tsx` | `useMyServiceRequests` | `GET /api/service-request/get-my-service-requests` | GET |
| `app/(DashboardGroup)/_components/technician/ServiceRequestDetailsDialog.tsx` | `useServiceRequestDetails` | `GET /api/service-request/get-my-service-request-details/:id` | GET |
| `app/(DashboardGroup)/_components/technician/CreateAvailabilityDialog.tsx` | `createAvailability` | `POST /api/availiabilty/create-availability` | POST |
| `app/(DashboardGroup)/dashboard/technician/availability/page.tsx` | `useMyAvailabilities` | `GET /api/availiabilty/get-my-availabilities` | GET |
| `app/(DashboardGroup)/_components/technician/EditAvailabilityDialog.tsx` | `useUpdateAvailability` | `PATCH /api/availiabilty/update-my-availability/:id` | PATCH |
| `app/(DashboardGroup)/_components/technician/DeleteAvailabilityDialog.tsx` | `useDeleteAvailability` | `DELETE /api/availiabilty/delete-my-availability/:id` | DELETE |
| `app/(DashboardGroup)/dashboard/technician/bookings/page.tsx` | `useTechnicianBookings` | `GET /api/booking/get-technician-bookings` | GET |
| `app/(DashboardGroup)/_components/technician/TechnicianBookingCard.tsx` | `useUpdateTechnicianBookingStatus` | `PATCH /api/booking/accept-booking/:id` | PATCH |
| `app/(DashboardGroup)/_components/technician/TechnicianBookingCard.tsx` | `useUpdateTechnicianBookingStatus` | `PATCH /api/booking/decline-booking/:id` | PATCH |
| `app/(DashboardGroup)/_components/technician/TechnicianBookingCard.tsx` | `useUpdateTechnicianBookingStatus` | `PATCH /api/booking/mark-booking-in-progress/:id` | PATCH |
| `app/(DashboardGroup)/_components/technician/TechnicianBookingCard.tsx` | `useUpdateTechnicianBookingStatus` | `PATCH /api/booking/complete-booking/:id` | PATCH |


## Admin

| Frontend Component/Page | React Hook | Backend Endpoint | Method |
|--------------------------|------------|------------------|--------|
| `app/(AdminGroup)/admin/service-requests/page.tsx` | `useAdminServiceRequests` | `GET /api/service-request/get-all-service-requests` | GET |
| `app/(AdminGroup)/_components/AdminServiceRequestDetailsDialog.tsx` | `useAdminServiceRequestDetails` | `GET /api/service-request/get-service-request-details/:id` | GET |
| `app/(AdminGroup)/_components/AdminServiceRequestDetailsDialog.tsx` | `useApproveServiceRequest` | `PATCH /api/service-request/approve-service-request/:id` | PATCH |
| `app/(AdminGroup)/_components/AdminServiceRequestDetailsDialog.tsx` | `useRejectServiceRequest` | `PATCH /api/service-request/reject-service-request/:id` | PATCH |
| `app/(AdminGroup)/_components/users/ChangeUserStatusDialog.tsx` | `useUpdateUserStatus` | `PATCH /api/user/:id/status` | PATCH |
| `app/(AdminGroup)/admin/payments/page.tsx` | `useAllPayments` | `GET /api/payment/get-all-payments` | GET |
| `app/(AdminGroup)/admin/masterservice/CreateMasterServiceDialog.tsx` | `useCreateMasterService` | `POST /api/master-service/create-service` | POST |
| `app/(AdminGroup)/admin/masterservice/EditMasterServiceDialog.tsx` | `useUpdateMasterService` | `PATCH /api/master-service/update-service/:id` | PATCH |
| `app/(AdminGroup)/admin/masterservice/DeleteMasterServiceDialog.tsx` | `useDeleteMasterService` | `DELETE /api/master-service/delete-service/:id` | DELETE |
| `app/(AdminGroup)/_components/category/CreateCategoryDialog.tsx` | `useCreateCategory` | `POST /api/category/create-category` | POST |
| `app/(AdminGroup)/_components/category/EditCategoryDialog.tsx` | `useUpdateCategory` | `PATCH /api/category/update-category/:id` | PATCH |
| `app/(AdminGroup)/_components/category/DeleteCategoryDialog.tsx` | `useDeleteCategory` | `DELETE /api/category/delete-category/:id` | DELETE |
| `app/(AdminGroup)/admin/bookings/page.tsx` | `useAllBookings` | `GET /api/booking/get-all-bookings` | GET |