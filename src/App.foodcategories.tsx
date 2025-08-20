import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import FoodCategoryGrid from './components/category/FoodCategoryGrid';
import BottomNavigation from './components/navigation/BottomNavigation';
import { mockRootProps } from './data/foodCategoriesMockData';
import theme from './theme';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff', pb: { xs: 10, md: 0 } }}>
          <FoodCategoryGrid categories={mockRootProps.categories} />
          <BottomNavigation />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;