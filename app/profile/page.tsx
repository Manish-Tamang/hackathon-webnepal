"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"

export default function ProfilePage() {
    const { data: session, status } = useSession()
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        bio: "Passionate web developer learning modern technologies",
        location: "Nepal",
        website: "",
    })

    if (status === "loading") {
        return (
            <div className="max-w-4xl mx-auto py-10 text-center">
                <p className="text-muted-foreground">Loading profile...</p>
            </div>
        )
    }

    if (!session?.user) {
        return (
            <div className="max-w-4xl mx-auto py-10 text-center">
                <p className="text-muted-foreground">No user signed in.</p>
                <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
        )
    }

    const handleSave = () => {
        console.log("Saving profile:", formData)
        setIsEditing(false)
    }

    const stats = [
        { label: "Courses Completed", value: "3" },
        { label: "Total XP", value: "1,200" },
        { label: "Current Streak", value: "5 days" },
        { label: "Rank", value: "#1" },
        { label: "Achievements", value: "12" },
        { label: "Time Spent", value: "47 hours" },
    ]

    return (
        <>
        <Header />
        <div className="max-w-4xl mx-auto space-y-8">
            <Card>
                <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                        <Image src={session?.user?.image ?? "/img/1.jpg"} alt="User Image" width={100} height={100} className="rounded-full"/>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold">{session?.user?.name ?? "Unknown User"}</h1>
                                    <p className="text-muted-foreground">{session?.user?.email}</p>
                                </div>
                                <Button
                                    onClick={() => setIsEditing(!isEditing)}
                                    variant={isEditing ? "secondary" : "default"}
                               className="bg-[#3D8B63] hover:bg-[#3D8B63] text-white rounded-[4px]" >
                                    {isEditing ? "Cancel" : "Edit Profile"}
                                </Button>
                            </div>
                            <p className="text-muted-foreground mb-4">{formData.bio}</p>
                            <div className="flex gap-4 text-sm text-muted-foreground">
                                <span>📍 {formData.location}</span>
                                {formData.website && <span>🌐 {formData.website}</span>}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {isEditing ? (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            id="bio"
                                            value={formData.bio}
                                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                            rows={3}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="website">Website</Label>
                                        <Input
                                            id="website"
                                            value={formData.website}
                                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                            placeholder="https://yourwebsite.com"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button onClick={handleSave} className="bg-[#3D8B63] hover:bg-[#3D8B63] text-white rounded-[4px]">Save Changes</Button>
                                        <Button variant="outline" onClick={() => setIsEditing(false)} className="rounded-[4px">
                                            Cancel
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <Label className="text-sm font-medium">Name</Label>
                                        <p className="text-sm text-muted-foreground">{formData.name}</p>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium">Email</Label>
                                        <p className="text-sm text-muted-foreground">{formData.email}</p>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium">Bio</Label>
                                        <p className="text-sm text-muted-foreground">{formData.bio}</p>
                                    </div>
                                    <div>
                                        <Label className="text-sm font-medium">Location</Label>
                                        <p className="text-sm text-muted-foreground">{formData.location}</p>
                                    </div>
                                    {formData.website && (
                                        <div>
                                            <Label className="text-sm font-medium">Website</Label>
                                            <p className="text-sm text-muted-foreground">{formData.website}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Stats Sidebar */}
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="flex justify-between">
                                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                                        <span className="text-sm font-medium">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
