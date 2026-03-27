"use client";

import React from 'react';
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Star, Search, Package, User, CheckCircle, XCircle, Filter, Grid3X3, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

const Browse = () => {

  const [extensions, setExtensions] = useState([]);
  const [filteredExtensions, setFilteredExtensions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");    
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get search query from URL parameters
    const urlSearchQuery = searchParams.get('search');
    if (urlSearchQuery) {
      setSearchQuery(urlSearchQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch("http://localhost:5000/extensions");
        if (!response.ok) throw new Error('Failed to fetch extensions');
        const data = await response.json();
        setExtensions(data);
        setFilteredExtensions(data);
      } catch (error) {
        console.error("Error fetching extensions:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchExtensions();
  }, []);

  useEffect(() => {
    const filtered = extensions.filter(
      (ext) =>
        (ext.name && ext.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (ext.developer && ext.developer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (ext.description && ext.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "downloads":
          return (b.stats?.downloads || 0) - (a.stats?.downloads || 0);
        case "rating":
          return (b.stats?.rating || 0) - (a.stats?.rating || 0);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredExtensions(filtered);
  }, [extensions, searchQuery, sortBy]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  const renderCard = (ext) => {
    // The outermost clickable area is the Card, not the Link
    const cardContent = (
      <Card className="group transition-all duration-300 overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-300 h-[400px] flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src={ext.logo || "/placeholder.svg"} alt={`${ext.name} logo`} />

              <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-800 font-semibold">
                {ext.name ? ext.name.charAt(0).toUpperCase() : 'E'}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight text-gray-800 group-hover:text-blue-600 transition-colors font-semibold">
                  {ext.name || 'Unnamed Extension'}
                </CardTitle>
                {ext.published ? (
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <User className="h-3 w-3 text-gray-400" />
                {ext.developer || 'Unknown Developer'}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0 flex flex-col flex-1">
          <CardDescription className="text-sm mb-4 line-clamp-2 text-gray-600">{ext.description}</CardDescription>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200">
              v{ext.version}
            </Badge>
            <Badge variant={ext.published ? "default" : "destructive"} className={`text-xs ${ext.published ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-red-100 text-red-700 hover:bg-red-200"}`}>
              {ext.published ? "Published" : "Unpublished"}
            </Badge>
          </div>

          {ext.features && ext.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 text-gray-700">Features:</h4>
              <div className="flex flex-wrap gap-1">
                {ext.features.slice(0, 3).map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    {feature}
                  </Badge>
                ))}
                {ext.features.length > 3 && (
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                    +{ext.features.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}
          
          <div className="mt-auto"></div>

          {ext.stats && (
            <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100 mt-4">
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4 text-gray-500" />
                {formatNumber(ext.stats.downloads)}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
                {typeof ext.stats.rating === "number" ? ext.stats.rating.toFixed(1) : "N/A"}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
    // Make the whole card clickable, but do not nest <a> inside <a>
    return (
      <div
        key={ext._id}
        className="block group"
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        onClick={() => window.location.href = `/view-extensions/${ext._id}`}
        tabIndex={0}
        role="link"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.location.href = `/view-extensions/${ext._id}`;
          }
        }}
      >
        {cardContent}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center mt-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-800 leading-tight tracking-tight">
            Extension 
            <span className="text-blue-600 drop-shadow-sm">
              &nbsp;Marketplace
            </span>
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover and install powerful extensions to enhance your development workflow
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search extensions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/80 border-gray-300 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48 bg-white/80 border-gray-300 text-gray-800 focus:border-blue-500 shadow-sm">
              <Filter className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              <SelectItem value="name" className="text-gray-800 hover:bg-gray-100 cursor-pointer">Name</SelectItem>
              <SelectItem value="downloads" className="text-gray-800 hover:bg-gray-100 cursor-pointer">Downloads</SelectItem>
              <SelectItem value="rating" className="text-gray-800 hover:bg-gray-100 cursor-pointer">Rating</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex border border-gray-300 rounded-lg p-1 bg-white/80 shadow-sm">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`h-8 w-8 p-0 ${viewMode === "grid" ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`h-8 w-8 p-0 ${viewMode === "list" ? "bg-blue-600 hover:bg-blue-700 text-white" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 text-lg font-medium">
            {filteredExtensions.length} extension{filteredExtensions.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {Object.entries(
          filteredExtensions.reduce((acc, ext) => {
            const category = ext.category || "Uncategorized";
            if (!acc[category]) acc[category] = [];
            acc[category].push(ext);
            return acc;
          }, {})
        ).map(([category, extList]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">{category}</h2>
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
                }`}
            >
              {extList.map(renderCard)}
            </div>
          </div>
        ))}
        
        {filteredExtensions.length === 0 && !isLoading && (
          <div className="text-center py-20 bg-white/50 rounded-xl border border-gray-200">
            <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No extensions found</h3>
            <p className="text-gray-500">Try adjusting your search query or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;