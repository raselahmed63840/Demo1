"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/data";

export type CartItem = { product: Product; quantity: number };
type StoreContextValue = {
  cart: CartItem[];
  count: number;
  subtotal: number;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  recentlyAdded?: number;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);
const CART_KEY = "super-ecommerce-next-cart";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [recentlyAdded, setRecentlyAdded] = useState<number>();

  useEffect(() => {
    try {
      const cached = window.localStorage.getItem(CART_KEY);
      if (cached) setCart(JSON.parse(cached));
    } catch {
      window.localStorage.removeItem(CART_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const value = useMemo<StoreContextValue>(() => {
    const addItem = (product: Product, quantity = 1) => {
      const permitted = Math.max(1, Math.min(quantity, product.stock));
      setCart((current) => {
        const exists = current.find((line) => line.product.id === product.id);
        if (exists) return current.map((line) => line.product.id === product.id ? { ...line, quantity: Math.min(line.quantity + permitted, product.stock) } : line);
        return [...current, { product, quantity: permitted }];
      });
      setRecentlyAdded(product.id);
      window.setTimeout(() => setRecentlyAdded(undefined), 1200);
    };
    const updateQuantity = (productId: number, quantity: number) => {
      setCart((current) => current.map((line) => line.product.id === productId ? { ...line, quantity: Math.max(1, Math.min(quantity, line.product.stock)) } : line));
    };
    const removeItem = (productId: number) => setCart((current) => current.filter((line) => line.product.id !== productId));
    const clearCart = () => setCart([]);
    const count = cart.reduce((sum, line) => sum + line.quantity, 0);
    const subtotal = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
    return { cart, count, subtotal, addItem, updateQuantity, removeItem, clearCart, recentlyAdded };
  }, [cart, recentlyAdded]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
