import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/axios';

// 예시: 사용자 목록을 가져오는 훅
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await api.get('/users');
      return response.data;
    },
  });
};

// 예시: 사용자를 생성하는 훅
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (userData: { name: string; email: string }) => {
      const response = await api.post('/users', userData);
      return response.data;
    },
    onSuccess: () => {
      // 성공시 사용자 목록을 다시 불러옴
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};

// 예시: 특정 사용자 정보를 가져오는 훅
export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: async () => {
      const response = await api.get(`/users/${id}`);
      return response.data;
    },
    enabled: !!id, // id가 있을 때만 실행
  });
}; 