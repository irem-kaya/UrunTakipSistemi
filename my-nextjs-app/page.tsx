import type { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center mb-6">
                <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
                <p className="text-lg mt-2">A modern web application built with Next.js.</p>
            </header>

            <main>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold">Explore Next.js Features</h2>
                    <ul className="list-disc ml-6 mt-2">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/categories">Categories</Link></li>
                    </ul>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold">Deploy Your Site</h2>
                    <p className="mt-2">Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Deploy with Vercel</a>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
