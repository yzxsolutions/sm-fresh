'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { debounce } from '@/utils/data';

interface ProductSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search products...",
  suggestions = [],
  onSuggestionClick
}) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Debounced search function
  const debouncedSearch = debounce((query: string) => {
    onSearchChange(query);
  }, 300);

  useEffect(() => {
    debouncedSearch(localQuery);
  }, [localQuery, debouncedSearch]);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    setShowSuggestions(value.length > 0 && suggestions.length > 0);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setLocalQuery(suggestion);
    onSearchChange(suggestion);
    onSuggestionClick?.(suggestion);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setLocalQuery('');
    onSearchChange('');
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(localQuery.toLowerCase()) &&
    suggestion.toLowerCase() !== localQuery.toLowerCase()
  ).slice(0, 5);

  return (
    <div className="relative">
      <div className="relative">
        <motion.div
          className={`relative flex items-center bg-white border rounded-lg transition-all duration-200 ${
            isFocused 
              ? 'border-primary shadow-md ring-2 ring-primary/20' 
              : 'border-border hover:border-border/80'
          }`}
          whileHover={{ scale: 1.01 }}
        >
          {/* Search Icon */}
          <div className="absolute left-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={localQuery}
            onChange={handleInputChange}
            onFocus={() => {
              setIsFocused(true);
              setShowSuggestions(localQuery.length > 0 && filteredSuggestions.length > 0);
            }}
            onBlur={() => {
              setIsFocused(false);
              // Delay hiding suggestions to allow clicking
              setTimeout(() => setShowSuggestions(false), 200);
            }}
            placeholder={placeholder}
            className="w-full pl-10 pr-10 py-3 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
          />

          {/* Clear Button */}
          {localQuery && (
            <motion.button
              onClick={clearSearch}
              className="absolute right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          )}
        </motion.div>

        {/* Search Suggestions */}
        {showSuggestions && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto"
          >
            <div className="py-2">
              {filteredSuggestions.map((suggestion, index) => (
                <motion.button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-2 text-left text-foreground hover:bg-muted transition-colors flex items-center space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: 'var(--color-muted)' }}
                >
                  <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>{suggestion}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Search Stats */}
      {localQuery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-muted-foreground"
        >
          Searching for "{localQuery}"
        </motion.div>
      )}
    </div>
  );
};

export default ProductSearch;