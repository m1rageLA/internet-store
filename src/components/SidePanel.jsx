import React from 'react';

export default function SidePanel() {
  return (
    <aside className="bg-slate-100 p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Kategorien</h2>
      <ul className="space-y-1 mb-4">
        <li>Obuwie</li>
        <li>Spodnie</li>
        <li>Koszulki</li>
      </ul>
      <div className="font-semibold">Koszyk</div>
    </aside>
  );
}