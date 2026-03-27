'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Rating } from '@mui/material';
import { ArrowLeft, Download, Star, Clock, User, Package, Tag, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ConfirmationModal from '@/components/ConfirmationModal';
import toast from 'react-hot-toast';
import { useAuth } from '@/components/AuthContext';

const ViewExtension = () => {
    const { id } = useParams();
    const router = useRouter();
    const { token: userToken } = useAuth();
    const [extension, setExtension] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
    const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
    const [pendingVsCodeUrl, setPendingVsCodeUrl] = useState('');

    useEffect(() => {
        fetchExtensionDetails();
        fetchReviews();
    }, [id]);

    const fetchExtensionDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/extensions/${id}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setExtension(data);
        } catch (error) {
            console.error('Error fetching extension:', error);
            setExtension(null);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await fetch(`http://localhost:5000/rating/byextension/${id}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            setReviews([]);
        }
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        
        if (!userToken) {
            toast.error('Please login to submit a review');
            return;
        }

        if (newReview.rating === 0) {
            toast.error('Please select a rating');
            return;
        }

        if (newReview.comment.trim().length < 5) {
            toast.error('Please enter a longer comment');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/rating/add', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                    extensionId: id,
                    rating: newReview.rating,
                    comment: newReview.comment
                }),
            });

            if (response.ok) {
                toast.success('Review submitted successfully!');
                setNewReview({ rating: 0, comment: '' });
                // Refresh both the listing and the reviews list
                fetchExtensionDetails();
                fetchReviews();
            } else {
                const data = await response.json();
                toast.error(data.error || 'Failed to submit review');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            toast.error('An error occurred. Please try again later.');
        }
    };

    const handleInstallClick = () => {
        if (!extension?.identifier || !extension?.publisher) {
            alert('This extension cannot be installed directly. Please contact the developer.');
            return;
        }
        
        const vsCodeUrl = `vscode:extension/${extension.identifier.trim()}`;
        setPendingVsCodeUrl(vsCodeUrl);
        setIsInstallModalOpen(true);
    };

    const confirmInstallation = () => {
        setIsInstallModalOpen(false);
        window.location.href = pendingVsCodeUrl;
    };

    if (!extension) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-4 border-blue-600"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-800 pb-20">
            <ConfirmationModal 
                isOpen={isInstallModalOpen}
                onClose={() => setIsInstallModalOpen(false)}
                onConfirm={confirmInstallation}
                title="Install Extension"
                message="Redirecting to VS Code"
            />

            <div className="mx-auto max-w-6xl px-4 py-8 mt-12">
                <Button 
                    variant="ghost" 
                    className="mb-8 text-gray-600 hover:text-blue-600 hover:bg-white/50 backdrop-blur-sm transition-all" 
                    onClick={() => router.back()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
                </Button>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Card className="p-8 bg-white/90 backdrop-blur-sm border-gray-200 shadow-soft overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4">
                                {extension.published && (
                                    <Badge className="bg-green-50 text-green-700 border-green-200 py-1 px-3 flex items-center gap-1">
                                        <CheckCircle size={14} /> Verified Publisher
                                    </Badge>
                                )}
                            </div>

                            <div className="mb-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">{extension.name}</h1>
                                    <p className="text-xl text-gray-600 leading-relaxed font-medium">{extension.description}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    {extension.identifier && (
                                        <Button
                                            type="button"
                                            onClick={handleInstallClick}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-10 py-7 text-lg rounded-2xl shadow-floating hover:shadow-blue-300 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3"
                                        >
                                            <Download className="h-6 w-6" /> Install Now
                                        </Button>
                                    )}
                                </div>
                            </div>

                            <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4 border-y border-gray-100 py-8">
                                <div className="flex flex-col items-center text-center p-4 bg-gray-50/50 rounded-xl">
                                    <Download className="h-6 w-6 text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Downloads</p>
                                    <p className="text-xl font-extrabold text-gray-800">{extension.stats?.downloads?.toLocaleString() || 0}</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-gray-50/50 rounded-xl">
                                    <Clock className="h-6 w-6 text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Version</p>
                                    <p className="text-xl font-extrabold text-gray-800">{extension.version}</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-gray-50/50 rounded-xl">
                                    <User className="h-6 w-6 text-blue-500 mb-2" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Publisher</p>
                                    <p className="text-xl font-extrabold text-gray-800 truncate w-full px-2" title={extension.publisher}>{extension.publisher}</p>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-gray-50/50 rounded-xl">
                                    <Star className="h-6 w-6 text-yellow-500 mb-2 fill-yellow-500" />
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Rating</p>
                                    <p className="text-xl font-extrabold text-gray-800">{extension.stats?.rating?.toFixed(1) || 'N/A'}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {extension.techStack && (
                                    <Badge variant="outline" className="py-2 px-4 text-blue-600 border-blue-200 bg-blue-50/50 text-sm font-semibold">
                                        <Package className="mr-2 h-4 w-4" />
                                        {extension.techStack}
                                    </Badge>
                                )}
                                <Badge variant="outline" className="py-2 px-4 text-indigo-600 border-indigo-200 bg-indigo-50/50 text-sm font-semibold">
                                    <Tag className="mr-2 h-4 w-4" />
                                    {extension.category}
                                </Badge>
                                {extension.features?.map((feature, idx) => (
                                    <Badge key={idx} variant="outline" className="py-2 px-4 text-gray-600 border-gray-200 bg-gray-50/50 text-sm font-medium">
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </Card>

                        <Card className="mt-8 p-8 bg-white/90 backdrop-blur-sm border-gray-200 shadow-soft">
                            <h2 className="mb-8 text-2xl font-extrabold text-gray-800 flex items-center gap-2">
                                <Star className="text-yellow-500 mb-1" /> Reviews & Ratings
                            </h2>
                            <div className="mb-10 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                <h3 className="mb-4 text-lg font-bold text-gray-700">Write a Review</h3>
                                <form onSubmit={handleSubmitReview}>
                                    <div className="mb-4">
                                        <Rating 
                                            value={newReview.rating} 
                                            onChange={(_, value) => setNewReview(prev => ({ ...prev, rating: value }))} 
                                            size="large" 
                                            sx={{ color: '#007ACC' }}
                                        />
                                    </div>
                                    <textarea 
                                        className="min-h-[120px] w-full rounded-xl border border-gray-300 p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-white transition-all outline-none text-gray-700 text-lg" 
                                        value={newReview.comment} 
                                        onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))} 
                                        placeholder="Share your experience with this extension..." 
                                    />
                                    <Button type="submit" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-5 rounded-xl shadow-md transition-all active:scale-95">
                                        Submit Review
                                    </Button>
                                </form>
                            </div>

                            <div className="space-y-8">
                                {reviews.length > 0 ? reviews.map((review) => (
                                    <div key={review._id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                                        <div className="mb-3 flex items-center justify-between">
                                            <div className="flex items-center space-x-3">
                                                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-800 font-bold border border-blue-200 shadow-sm">
                                                    {review.user?.name?.charAt(0).toUpperCase() || 'A'}
                                                </div>
                                                <span className="font-bold text-gray-800">{review.user?.name || 'Anonymous User'}</span>
                                            </div>
                                            <Rating value={review.rating} readOnly size="small" sx={{ color: '#007ACC' }} />
                                        </div>
                                        <p className="text-gray-600 text-lg leading-relaxed bg-white/50 p-4 rounded-xl border border-gray-100 italic">
                                            "{review.comment}"
                                        </p>
                                    </div>
                                )) : (
                                    <div className="text-center py-10">
                                        <Package className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                                        <p className="text-gray-500 text-lg">No reviews yet. Be the first to share your thoughts!</p>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </div>

                    <div className="lg:col-span-1">
                        <Card className="p-8 bg-white/90 backdrop-blur-sm border-gray-200 shadow-soft sticky top-24">
                            <h2 className="mb-6 text-xl font-extrabold text-gray-800 flex items-center gap-2">
                                <Package className="text-blue-600" /> Installation Guide
                            </h2>
                            {extension.identifier ? (
                                <>
                                    <p className="mb-6 text-gray-600 leading-relaxed font-medium">
                                        To install this extension, click the <strong>Install Now</strong> button or use VS Code Quick Open:
                                    </p>
                                    <div className="bg-gray-800 text-gray-200 p-5 rounded-xl shadow-inner font-mono text-sm relative group">
                                        <div className="flex items-center justify-between mb-2 opacity-50 text-[10px] uppercase tracking-tighter">
                                            <span>Terminal Command</span>
                                            <Badge className="bg-gray-700 text-gray-300">Copy</Badge>
                                        </div>
                                        <code className="text-blue-300">ext install {extension.identifier}</code>
                                    </div>
                                    <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                                        <p className="text-xs text-blue-700 font-medium">
                                            <strong>Tip:</strong> Ensure Visual Studio Code is installed and added to your system path for the direct installation link to work.
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="mb-4 text-gray-600">
                                        Installation information is not yet available for this extension.
                                    </p>
                                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-sm">
                                        <p className="text-sm text-yellow-800 font-bold mb-2">Notice:</p>
                                        <p className="text-sm text-yellow-700 leading-relaxed">
                                            Please reach out to <strong>{extension.developer || 'the developer'}</strong> for manual installation instructions.
                                        </p>
                                    </div>
                                </>
                            )}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewExtension;
