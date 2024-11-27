import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51QNgEL04gwFZrxvyn24IVdCTYwlYHjHyDcr9E1nOky01ScOrpJKKPBOIoYl1TkGbX3AkHUVG8BU4djIgndEDZuLx00cjtC2BLi');

export default stripePromise;