"use client";

import { useState, useEffect } from "react";
import { Save, Layout, Plus, Trash2, GripVertical, ChevronDown, ChevronRight } from "lucide-react";

export default function HeaderCustomise() {
  const defaultMenuItems = [
    { id: "home", type: "link", label: "Home", href: "/" },
    {
      id: "startups",
      type: "dropdown",
      label: "Startups",
      items: [
        { id: "startup-stories", label: "Startup Stories", href: "/?category=startups" },
        { id: "success-stories", label: "Success Stories", href: "/?category=success-stories" },
        { id: "funding", label: "Funding & Investment", href: "/?category=funding" },
        { id: "incubators", label: "Incubators & Accelerators", href: "/?category=incubators" },
      ],
    },
    {
      id: "resources",
      type: "dropdown",
      label: "Resources",
      items: [
        { id: "guides", label: "Startup Guides", href: "/?category=guides" },
        { id: "tools", label: "Tools & Templates", href: "/?category=tools" },
        { id: "legal", label: "Legal & Compliance", href: "/?category=legal" },
        { id: "marketing", label: "Marketing & Growth", href: "/?category=marketing" },
      ],
    },
    {
      id: "events",
      type: "dropdown",
      label: "Events",
      items: [
        { id: "workshops", label: "Workshops", href: "/?category=workshops" },
        { id: "conferences", label: "Conferences", href: "/?category=conferences" },
        { id: "networking", label: "Networking Events", href: "/?category=networking" },
        { id: "webinars", label: "Webinars", href: "/?category=webinars" },
      ],
    },
    {
      id: "community",
      type: "dropdown",
      label: "Community",
      items: [
        { id: "mentorship", label: "Mentorship", href: "/?category=mentorship" },
        { id: "partnerships", label: "Partnerships", href: "/?category=partnerships" },
        { id: "forums", label: "Forums & Discussions", href: "/?category=forums" },
        { id: "contact", label: "Contact Us", href: "/contact" },
      ],
    },
    { id: "about", type: "link", label: "About", href: "/about" },
  ];

  const [headerContent, setHeaderContent] = useState({
    organizationName: "Maharashtra Startup Organisation",
    socialLinks: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    menuItems: defaultMenuItems,
  });

  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    const loadHeaderContent = async () => {
      try {
        // Try to load from API first
        const response = await fetch("/api/settings/header");
        if (response.ok) {
          const data = await response.json();
          if (data.header) {
            setHeaderContent({
              organizationName: data.header.organizationName || "Maharashtra Startup Organisation",
              socialLinks: data.header.socialLinks || {
                facebook: "https://facebook.com",
                twitter: "https://twitter.com",
                youtube: "https://youtube.com",
                instagram: "https://instagram.com",
                linkedin: "https://linkedin.com",
              },
              menuItems: data.header.menuItems || defaultMenuItems,
            });
            return;
          }
        }
      } catch (error) {
        console.error("Error loading header from API:", error);
      }

      // Use default values if API fails
      // (default values are already set in initial state)
    };

    loadHeaderContent();
  }, []);

  const toggleMenuExpanded = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const addMenuItem = () => {
    const newItem = {
      id: `menu-${Date.now()}`,
      type: "link",
      label: "New Menu Item",
      href: "/",
    };
    setHeaderContent((prev) => ({
      ...prev,
      menuItems: [...prev.menuItems, newItem],
    }));
  };

  const addDropdownMenu = () => {
    const newMenu = {
      id: `dropdown-${Date.now()}`,
      type: "dropdown",
      label: "New Dropdown",
      items: [
        { id: `submenu-${Date.now()}`, label: "New Submenu", href: "/" },
      ],
    };
    setHeaderContent((prev) => ({
      ...prev,
      menuItems: [...prev.menuItems, newMenu],
    }));
    setExpandedMenus((prev) => ({ ...prev, [newMenu.id]: true }));
  };

  const updateMenuItem = (index, field, value) => {
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, menuItems: updated };
    });
  };

  const deleteMenuItem = (index) => {
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      updated.splice(index, 1);
      return { ...prev, menuItems: updated };
    });
  };

  const addSubmenuItem = (menuIndex) => {
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      if (updated[menuIndex].type === "dropdown") {
        updated[menuIndex] = {
          ...updated[menuIndex],
          items: [
            ...updated[menuIndex].items,
            {
              id: `submenu-${Date.now()}`,
              label: "New Submenu",
              href: "/",
            },
          ],
        };
      }
      return { ...prev, menuItems: updated };
    });
  };

  const updateSubmenuItem = (menuIndex, submenuIndex, field, value) => {
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      if (updated[menuIndex].type === "dropdown") {
        updated[menuIndex] = {
          ...updated[menuIndex],
          items: updated[menuIndex].items.map((item, idx) =>
            idx === submenuIndex ? { ...item, [field]: value } : item
          ),
        };
      }
      return { ...prev, menuItems: updated };
    });
  };

  const deleteSubmenuItem = (menuIndex, submenuIndex) => {
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      if (updated[menuIndex].type === "dropdown") {
        updated[menuIndex] = {
          ...updated[menuIndex],
          items: updated[menuIndex].items.filter((_, idx) => idx !== submenuIndex),
        };
      }
      return { ...prev, menuItems: updated };
    });
  };

  const moveMenuItem = (index, direction) => {
    if (
      (direction === "up" && index === 0) ||
      (direction === "down" && index === headerContent.menuItems.length - 1)
    ) {
      return;
    }
    setHeaderContent((prev) => {
      const updated = [...prev.menuItems];
      const newIndex = direction === "up" ? index - 1 : index + 1;
      [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
      return { ...prev, menuItems: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/settings/header", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ header: headerContent }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || "Failed to save header settings");
        return;
      }

      alert("Header settings saved successfully!");
    } catch (error) {
      console.error("Error saving header:", error);
      alert("Failed to save header settings. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Header Customisation</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Customize website header settings
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="p-5">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Header Settings
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Customize website header</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-2">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      value={headerContent.organizationName || ""}
                      onChange={(e) => {
                        setHeaderContent((prev) => ({
                          ...prev,
                          organizationName: e.target.value,
                        }));
                      }}
                      className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Maharashtra Startup Organisation"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-900 dark:text-white mb-3">
                      Social Media Links
                    </label>
                    <div className="space-y-3">
                      {["facebook", "twitter", "youtube", "instagram", "linkedin"].map((platform) => (
                        <div key={platform} className="flex items-center gap-3">
                          <label className="w-24 text-xs font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {platform}
                          </label>
                          <input
                            type="url"
                            value={headerContent.socialLinks?.[platform] || ""}
                            onChange={(e) => {
                              setHeaderContent((prev) => ({
                                ...prev,
                                socialLinks: {
                                  ...prev.socialLinks,
                                  [platform]: e.target.value,
                                },
                              }));
                            }}
                            className="flex-1 px-3 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder={`https://${platform}.com`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Menus Section */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="mb-4 pb-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Navigation Menus
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Manage menu items and submenus
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={addMenuItem}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors font-medium"
                    >
                      <Plus size={12} />
                      Add Link
                    </button>
                    <button
                      type="button"
                      onClick={addDropdownMenu}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors font-medium"
                    >
                      <Plus size={12} />
                      Add Dropdown
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {headerContent.menuItems?.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex flex-col gap-1 pt-1">
                          <button
                            type="button"
                            onClick={() => moveMenuItem(index, "up")}
                            disabled={index === 0}
                            className="p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move up"
                          >
                            <ChevronRight size={14} className="rotate-[-90deg]" />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveMenuItem(index, "down")}
                            disabled={index === headerContent.menuItems.length - 1}
                            className="p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed"
                            title="Move down"
                          >
                            <ChevronRight size={14} className="rotate-90" />
                          </button>
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={item.label || ""}
                              onChange={(e) => updateMenuItem(index, "label", e.target.value)}
                              className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                              placeholder="Menu Label"
                            />
                            <select
                              value={item.type || "link"}
                              onChange={(e) => {
                                const newType = e.target.value;
                                if (newType === "link") {
                                  updateMenuItem(index, "type", "link");
                                  updateMenuItem(index, "items", undefined);
                                } else {
                                  updateMenuItem(index, "type", "dropdown");
                                  if (!item.items) {
                                    updateMenuItem(index, "items", [
                                      { id: `submenu-${Date.now()}`, label: "New Submenu", href: "/" },
                                    ]);
                                  }
                                }
                              }}
                              className="px-3 py-2 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                              <option value="link">Simple Link</option>
                              <option value="dropdown">Dropdown Menu</option>
                            </select>
                            <button
                              type="button"
                              onClick={() => deleteMenuItem(index)}
                              className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                              title="Delete menu"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>

                          {item.type === "link" ? (
                            <input
                              type="text"
                              value={item.href || ""}
                              onChange={(e) => updateMenuItem(index, "href", e.target.value)}
                              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                              placeholder="/path or URL"
                            />
                          ) : (
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                  Submenu Items
                                </span>
                                <button
                                  type="button"
                                  onClick={() => addSubmenuItem(index)}
                                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded transition-colors"
                                >
                                  <Plus size={10} />
                                  Add Submenu
                                </button>
                              </div>
                              <div className="space-y-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                                {item.items?.map((subitem, subIndex) => (
                                  <div
                                    key={subitem.id || subIndex}
                                    className="flex items-center gap-2 p-2 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700"
                                  >
                                    <input
                                      type="text"
                                      value={subitem.label || ""}
                                      onChange={(e) =>
                                        updateSubmenuItem(index, subIndex, "label", e.target.value)
                                      }
                                      className="flex-1 px-2 py-1.5 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="Submenu Label"
                                    />
                                    <input
                                      type="text"
                                      value={subitem.href || ""}
                                      onChange={(e) =>
                                        updateSubmenuItem(index, subIndex, "href", e.target.value)
                                      }
                                      className="flex-1 px-2 py-1.5 text-xs border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="/path or URL"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => deleteSubmenuItem(index, subIndex)}
                                      className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                                      title="Delete submenu"
                                    >
                                      <Trash2 size={12} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-xs rounded transition-colors font-medium"
              >
                <Save size={14} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
