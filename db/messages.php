<?php

/**
 * Defines message providers (types of messages being sent)
 *
 * @package mod_scheduler
 * @copyright  2016 Henning Bostelmann and others (see README.txt)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

$messageproviders = [

    // Invitations to make a booking.
    'invitation'           => [
    ],

    // Notifications about bookings (to teachers or students).
    'bookingnotification'  => [
    ],

    // Automated reminders about upcoming appointments.
    'reminder'             => [
    ],

    // Automated reminders about upcoming appointments.
    'reminderteacher'      => [
    ],

    // Automated reminders about upcoming appointments.
    'reminderclose'        => [
    ],

    // Automated reminders about upcoming appointments.
    'remindercloseteacher' => [
    ],

];
