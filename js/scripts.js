// TadaTable data for pricing table
const tableData = [
    { name: "Marmita Pequena", price: "R$ 20", description: "Ideal para refeições rápidas." },
    { name: "Marmita Média", price: "R$ 30", description: "Perfeita para o almoço." },
    { name: "Marmita Grande", price: "R$ 40", description: "Satisfação garantida." }
];

// Render Pricing Table
const pricingTable = document.getElementById('pricing-table');
tableData.forEach(item => {
    const row = document.createElement('div');
    row.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'mb-4');
    row.innerHTML = `
        <h3 class="text-xl font-bold text-green-600">${item.name}</h3>
        <p class="text-gray-700">${item.description}</p>
        <p class="text-green-700 font-bold mt-2">${item.price}</p>
    `;
    pricingTable.appendChild(row);
});
