

function useApi() {
  // async function getUser(): Promise<void> {
  //   const { data, status } = await api.get<IUser>("http://localhost:3333/users")

  //   if (status !== 200) {
  //     localStorage.removeItem("token")
  //   }
  //   setUser(data)
  // }

  // async function register(name: string, email: string, password: string): Promise<void> {
  //   const { status, statusText } = await api.post("http://localhost:3333/users/register", {
  //     name,
  //     email,
  //     password
  //   })

  //   if (status !== 201) {
  //     toast.error(statusText, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }

  //   navigate("/login")
  // }

  // async function login(email: string, password: string): Promise<void> {
  //   const { data, status, statusText } = await api.post("http://localhost:3333/users/login", {
  //     email,
  //     password
  //   })

  //   if (status !== 200) {
  //     toast.error(statusText, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }

  //   localStorage.setItem("token", data.token)

  //   api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`

  //   setUser(data.user)
  //   navigate("/")
  // }

  // async function addProductFromFavorite(productId: string): Promise<string | number> {
  //   const { status, statusText } = await api.post(`http://localhost:3333/products/${productId}`)

  //   if (status !== 200) {
  //     return statusText
  //   }

  //   return status
  // }

  // async function getAllProducts() {
  //   const { data } = await api.get("http://localhost:3333/products")
  //   setProductsFavorites(data)
  // }

  // async function getAllProductsFavorites() {
  //   const { data, status, statusText } = await api.get("http://localhost:3333/products/favorites")

  //   if (status !== 200) {
  //     return statusText
  //   }

  //   setProductsFavorites(data)
  // }
}

export { useApi }