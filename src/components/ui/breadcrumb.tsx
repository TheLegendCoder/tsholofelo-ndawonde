import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BreadcrumbItem as BreadcrumbItemType, generateBreadcrumbSchema, generateJSONLD } from '@/lib/seo/structured-data';

// Breadcrumb Root Component
export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  children: React.ReactNode;
  separator?: React.ReactNode;
}

export function Breadcrumb({ children, separator, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </nav>
  );
}

// Breadcrumb List
export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<'ol'> {
  children: React.ReactNode;
}

export function BreadcrumbList({ children, className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </ol>
  );
}

// Breadcrumb Item
export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'> {
  children: React.ReactNode;
}

export function BreadcrumbItem({ children, className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn('inline-flex items-center gap-2', className)}
      {...props}
    >
      {children}
    </li>
  );
}

// Breadcrumb Link
export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  href: string;
}

export function BreadcrumbLink({ children, className, href, ...props }: BreadcrumbLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

// Breadcrumb Separator
export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'span'> {
  children?: React.ReactNode;
}

export function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn('text-muted-foreground', className)}
      {...props}
    >
      {children || <ChevronRight className="h-4 w-4" />}
    </span>
  );
}

// Breadcrumb Current Page (no link)
export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<'span'> {
  children: React.ReactNode;
}

export function BreadcrumbPage({ children, className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      className={cn('font-medium text-foreground', className)}
      aria-current="page"
      {...props}
    >
      {children}
    </span>
  );
}

// Complete Breadcrumb Component with JSON-LD
export interface BreadcrumbWithSchemaProps {
  items: BreadcrumbItemType[];
  className?: string;
}

export function BreadcrumbWithSchema({ items, className }: BreadcrumbWithSchemaProps) {
  const schema = generateBreadcrumbSchema(items);
  const jsonLd = generateJSONLD(schema);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      
      {/* Visual Breadcrumb */}
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {isLast || !item.url ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={item.url}>
                      {item.name}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
