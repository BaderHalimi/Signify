<?php

use Illuminate\Support\Facades\Route;



Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->name('dashboard.')
    ->group(function () {


        // Route::get('/', function () {

        //     return view('user.dashboard.index');
        // })->name('overview');


        


    });