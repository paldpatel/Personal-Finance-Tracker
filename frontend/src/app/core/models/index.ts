export interface User {
    id: number;
    email: string;
    first_name: string | null;
    last_name: string | null;
    role: 'user' | 'admin';
    created_at: string;
  }
  
  export interface AuthResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
  }
  
  export interface Category {
    id: number;
    user_id: number;
    name: string;
    type: 'income' | 'expense';
    color: string;
    icon: string;
    created_at: string;
  }
  
  export interface Transaction {
    id: number;
    user_id: number;
    category_id: number | null;
    amount: number;
    type: 'income' | 'expense';
    description: string | null;
    txn_date: string;
    client_uuid: string | null;
    category_name?: string;
    category_color?: string;
    category_icon?: string;
    created_at?: string;
    synced?: boolean; // local-only flag for offline transactions
  }
  
  export interface Budget {
    id: number;
    user_id: number;
    category_id: number;
    monthly_limit: number;
    month_year: string;
    category_name?: string;
    category_color?: string;
  }
  
  export interface DashboardData {
    monthYear: string;
    summary: { income: number; expense: number; balance: number };
    spendingByCategory: {
      category_id: number;
      category_name: string;
      category_color: string;
      total: number;
    }[];
    monthlyTrend: { month: string; type: 'income' | 'expense'; total: number }[];
  }
  
  export interface TransactionFilters {
    startDate?: string;
    endDate?: string;
    type?: string;
    categoryId?: number;
    limit?: number;
    offset?: number;
  }