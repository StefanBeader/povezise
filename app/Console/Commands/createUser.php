<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class createUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create User via command line';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $user = new User();
        $user->name = $this->ask("Enter User Name");
        $user->email = $this->ask("Enter User Email");
        $user->password = bcrypt($this->ask("Enter User Password"));

        $user->save();

        return $user->id;
    }
}
