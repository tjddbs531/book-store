import { useEffect, useState } from "react";
import { fetchCategory } from "../api/category.api";
import { Category } from "../models/category.model";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const location = useLocation();
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategory().then((data) => {
      if (!data) return;

      const params = new URLSearchParams(location.search);
      const selectedId = params.get('category_id');

      const categoryWithAll = [
        { category_id: null, category_name: '전체' },
        ...data,
      ].map((item) => ({
        ...item,
        isActive: selectedId ? item.category_id === Number(selectedId) : false,
      }));

      setCategory(categoryWithAll);
    });
  }, [location.search]);

  return { category };
};
