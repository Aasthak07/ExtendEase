"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Star, Search, Package, User, CheckCircle, XCircle, Filter, Grid3X3, List } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Browse = () => {
  const [extensions, setExtensions] = useState([]);
  const [filteredExtensions, setFilteredExtensions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/extensions");
        setExtensions(response.data);
        setFilteredExtensions(response.data);
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
        ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ext.description.toLowerCase().includes(searchQuery.toLowerCase())
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

  const renderCard = (ext) => (
    <Card key={ext._id} className="group transition-all duration-200 overflow-hidden border-0 shadow-md hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 rounded-lg">
            <AvatarImage src={ext.logo || "/placeholder.svg"} alt={`${ext.name} logo`} />
            <AvatarFallback className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
              {ext.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                {ext.name}
              </CardTitle>
              {ext.published ? (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <User className="h-3 w-3" />
              {ext.developer}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm mb-4 line-clamp-2">{ext.description}</CardDescription>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-xs">
            v{ext.version}
          </Badge>
          <Badge variant={ext.published ? "default" : "destructive"} className="text-xs">
            {ext.published ? "Published" : "Unpublished"}
          </Badge>
        </div>

        {ext.features && ext.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Features:</h4>
            <div className="flex flex-wrap gap-1">
              {ext.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {ext.features.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{ext.features.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {ext.stats && (
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              {formatNumber(ext.stats.downloads)}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {typeof ext.stats.rating === "number" ? ext.stats.rating.toFixed(1) : "N/A"}
            </div>
          </div>
        )}

        <Button className="w-full" asChild disabled={!ext.published || !ext.downloadUrl}>
          <a href={ext.downloadUrl || "#"} target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4 mr-2" /> Install Extension
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Extension Marketplace
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover and install powerful extensions to enhance your workflow
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search extensions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="downloads">Downloads</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex border rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="h-8 w-8 p-0"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-muted-foreground">
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
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">{category}</h2>
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {extList.map(renderCard)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Browse;
