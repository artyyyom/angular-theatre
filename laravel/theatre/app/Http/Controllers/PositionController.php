<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\PositionsRepository;

class PositionController extends SiteController
{
    public function __construct(PositionsRepository $p_rep) {
    	parent::__construct(new \App\Repositories\NavbarsRepository(new \App\Navbar));

    	$this->p_rep = $p_rep;
    }

    public function index() {
    	return [
    		response()->json($this->p_rep->get()),
    		'status' => '200 OK'
    	];
    }
}
