import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface IUser {
  id?: string;
  name: string;
  email: string;
}

interface IProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageURL: string;
}

interface AppProviderProps {
  children: ReactNode;
}

interface AppContextData {
  user: IUser | null;
  setUser: (user: any) => any;
  products: IProduct[];
  productsFavorites: IProduct[];
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<number | void>;
  logout: () => void
  addProductFromFavorite: (productId: string) => Promise<void>;
  getAllProductsFavorites: () => Promise<void>;
  deleteProductFavorite: (productId: string) => Promise<void>;
}

export const AppContext = createContext<AppContextData>(
  {} as AppContextData
);

export function AppProvider({ children }: AppProviderProps) {
  const tokenStorage = localStorage.getItem('token');
  const navigate = useNavigate()

  const [user, setUser] = useState<IUser | null>(null);
  const [products, setProducts] = useState<IProduct[]>([])
  const [productsFavorites, setProductsFavorites] = useState([])

  async function getUser(): Promise<void> {
    const { data, status } = await api.get<IUser>("/users")

    if (status !== 200) {
      localStorage.removeItem("token")
    }

    setUser(data)
  }

  async function register(name: string, email: string, password: string): Promise<void> {
    const { status, statusText } = await api.post("/users/register", {
      name,
      email,
      password
    })

    if (status !== 201) {
      toast.error(statusText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    navigate("/login")
  }

  async function login(email: string, password: string): Promise<number | void> {
    const { data, status } = await api.post("/users/login", {
      email,
      password
    })

    if (status !== 200) {
      return status
    }

    localStorage.setItem("token", data.token)

    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`

    setUser(data.user)
    navigate("/")
  }

  function logout() {
    setUser(null)
    localStorage.removeItem("token")
    navigate("/login")
  }

  async function addProductFromFavorite(productId: string): Promise<void> {
    const { status, statusText } = await api.post(`/products/${productId}`)

    if (status !== 200) {
      toast.error(statusText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    toast.success("Produto adicionado aos favoritos", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  async function getAllProducts(): Promise<void> {
    const { data } = await api.get("/products")
    setProducts(data)
  }

  async function getAllProductsFavorites() {
    const { data } = await api.get("/products/favorites")

    const dataFiltered = data.products.map((prod: IProduct) => prod)
    setProductsFavorites(dataFiltered)
  }

  async function deleteProductFavorite(productId: string): Promise<void> {
    const { status } = await api.delete(`/products/${productId}`)

    if (status !== 200) {
      navigate("/")
    }

    const { data: newData } = await api.get("/products/favorites")

    setProductsFavorites(newData)
  }

  useEffect(() => {
    async function execute() {
      getAllProducts()
      if (tokenStorage) {
        getUser()
      }
    }
    execute()

  }, []);


  return (
    <AppContext.Provider value={{
      user, setUser, products, productsFavorites,
      register,
      login,
      logout,
      addProductFromFavorite,
      getAllProductsFavorites,
      deleteProductFavorite
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  return context;
}