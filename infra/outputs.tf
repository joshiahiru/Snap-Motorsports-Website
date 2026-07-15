output "route53_nameservers" {
  description = "Update these nameservers at your external domain registrar."
  value       = aws_route53_zone.main.name_servers
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain (usable before DNS propagation)."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID for cache invalidation."
  value       = aws_cloudfront_distribution.site.id
}

output "site_bucket_name" {
  description = "S3 bucket name for static site files."
  value       = aws_s3_bucket.site.bucket
}

output "github_deploy_role_arn" {
  description = "IAM role ARN for GitHub Actions OIDC deployment."
  value       = aws_iam_role.github_deploy.arn
}

output "acm_certificate_status" {
  description = "ACM certificate status (ISSUED after registrar NS delegation)."
  value       = aws_acm_certificate.site.status
}

# Tag-based Resource Group (replaces deprecated myApplications console).
output "resource_group_arn" {
  description = "ARN of the snap-motorsports Resource Group (empty outside prod env)."
  value       = length(aws_resourcegroups_group.snap_motorsports) > 0 ? aws_resourcegroups_group.snap_motorsports[0].arn : ""
}
