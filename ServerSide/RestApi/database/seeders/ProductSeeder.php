<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        Product::insert([
            'name' => 'Miekirin',
            'description' => 'Miekirin dengan daging dan sayur',
            'price' => 12000,
            'image' => 'products/images/chickennoodle.png'
        ]);

        Product::insert([
            'name' => 'Miekirin Pedas Nikmat',
            'description' => 'Miekirin dengan campuran bahan pedas yang nagih abis.',
            'price' => 15000,
            'image' => 'products/images/miekirin_pedas_nikmat.jpg'
        ]);

        Product::insert([
            'name' => 'Miekirin Ayam Geprek',
            'description' => 'Miekirin dengan paduan ayam geprek yang crispy',
            'price' => 17000,
            'image' => 'products/images/miekirin-ayam-geprek'
        ]);
    }
}
