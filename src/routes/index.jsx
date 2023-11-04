import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../pages/Feed';
import Posts from '../pages/Posts';
import Update from '../pages/Update';
import More from '../pages/More';
import Erro from '../pages/Erro';

export default function AppRouter() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/more/:id" element={<More />} />
            <Route path="*" element={<Erro />} />
         </Routes>
      </div>
   );
}
